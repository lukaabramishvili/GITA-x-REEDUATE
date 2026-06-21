#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const chalk = require('chalk');

const program = new Command();

function getTodos() {
    return JSON.parse(
        fs.readFileSync('todos.json', 'utf8')
    );
}

function saveTodos(todos) {
    fs.writeFileSync(
        'todos.json',
        JSON.stringify(todos, null, 2)
    );
}

program
    .command("show")
    .action(() => {
        const todos = getTodos();
        console.log(todos);
    });

program
    .command("add <title>")
    .action((title) => {
        const todos = getTodos();

        const newTodo = {
            id: Date.now(),
            title,
            isDone: false
        };

        todos.push(newTodo);
        saveTodos(todos);

        console.log(chalk.green("Todo added:"));
        console.log(newTodo);
    });

program
  .command("delete <id>")
  .action((id) => {

    const todos = getTodos();

    const todo = todos.find(
      t => t.id === Number(id)
    );

    if (!todo) {
      console.log("Todo not found");
      return;
    }

    const filtered = todos.filter(
      t => t.id !== Number(id)
    );

    saveTodos(filtered);

    console.log(todo);
  });


program
  .command("update <id>")
  .option("--name <name>")
  .action((id, options) => {

    const todos = getTodos();

    const todo = todos.find(
      t => t.id === Number(id)
    );

    if (!todo) {
      console.log("Todo not found");
      return;
    }

    todo.title = options.name;

    saveTodos(todos);

    console.log(todo);
  });

program.parse();