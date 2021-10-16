// // import { sum } from "./modules/sum";
//
// // const root = document.querySelector('#root');
// // root.textContent = sum(6, -1).toString();
//
// const testTempl = `
// <div>
//         {{ field1 }}
//         <span>{{field2}}</span>
//         <span>{{ field3.info.name }}</span>
// </div>
// `;
//
//
// const tmpl = new Templator(testTempl);
//
// const context = {
//   field1: 'Text 1',
//   field2: 42,
//   field3: {
//     info: {
//       name: 'Simon',
//     },
//   },
// };
//
// const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой
// document.body.innerHTML = renderedTemplate
//
// // Показался нужный результат
//
