// =========promis==========
// const p = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        console.log('preparing data...');
//        const bekendData={
//            server:'AAA',
//            port:2000,
//            status:'500 - server is not working'
//        }
//        resolve(bekendData) // случии правильного ответа
//     // reject(bekendData) // случии отклонение
//    },2000) 
// })
// p
// .then((data)=>console.log('OK', data))
// .catch((err)=>{
//     console.error('ERROR', err);
// })
// .finally((data)=>console.log('FINAL ANSWER'))


// ==========Виде запросов========== HTTP запросы
// Get (получаем данные из бека)
// post (отправляем данные в бек)
// put Patch (редоктирование данных)
// delete(удаление данных)

// ==============Виды HTTP статусов================ Hyper text transmition protocol
// 200 - ОК правильно
// 300 - перенапровление
// 400 - ошибка во фронтенде - непрявильный запрос
// 500 - ошибка сервера


// ===============async await fetch ===============
// const search = async()=>{
//     let url = 'https://www.youtube.com/watch?v=c9JNp6kdKqU'
//     let request = await fetch(url)
//     let response = await request.json()
//     console.log(response);
// }
// =================================

const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=25&q='

const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

const SearchGiphy = async (e) => {
    e.preventDefault()
    let text = input.value
    let url = API + KEY + secondStr + text
    let request = await fetch(url)
    let response = await request.json()
    input.value = ''
    output.innerHTML = ''
    renderGiphy(response.data)
}

const renderGiphy = (arr) => {
    arr.forEach(el => {
        let div = document.createElement('div')
        div.classList.add('card')
        let iframe = document.createElement('iframe')
        let h3 = document.createElement('h3')
        iframe.src = el.embed_url
        // h3.innerHTML = el.title
        output.append(div)
        div.append(h3, iframe)
    })
}

btn.addEventListener('click', SearchGiphy)




















































































































































































