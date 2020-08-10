#!/usr/bin/env node

// Node cli 应用入口文件必须要有这样的文件头 如果是linux或者macos还需要修改此文件的读写权限为 755 具体就是通过chmod 755 cli.js 实现修改

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'description?'
    }
  ])
  .then((answers) => {
    const tmplDir = path.join(__dirname, 'templates')

    const destDir = process.cwd()

    fs.readdir(tmplDir, (err, files) => {
      if (err) throw err
      files.forEach((file) => {
        ejs.renderFile(path.join(tmplDir, file), answers, (err, result) => {
          if (err) throw err
          fs.writeFileSync(path.join(destDir, file), result)
        })
      })
    })
  })
