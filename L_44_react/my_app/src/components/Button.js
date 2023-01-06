// rfc

import React from "react";

export default function Button() {
  const btn_style = {
    border: "1px solid green",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
  };
  return (
    <div>
      <button style={btn_style}>Button</button>
    </div>
  );
}

// homework
// https://github.com/NelliEfr/HW_React_basics/blob/main/task.txt
// 1. Создать react-приложение через npx create-react-app app_name
// 2. Удалить ненужные файлы => подготовить приложение к работе
// 3. Запустить приложение через npm start (предварительно перейти в папку проекта app_name)
// 4. Создать компонент User с параграфами 'First name', 'Last name', 'Address', 'Salary'
// 5. В компоненте App создать массив users с объектами. Пример:
// const users = [
//     {
//       id: 1,
//       firstname: 'Oleg',
//       lastname: 'Petrov',
//       address: 'Moscow, Russia',
//       salary: 280
//     },
//     {
//       id: 2,
//       firstname: 'Anna',
//       lastname: 'Ivanova',
//       address: 'Berlin, Germany',
//       salary: 500
//     }
// ]

// 6. Из массива users достать информацию и передать ее через пропсы в компоненты User
