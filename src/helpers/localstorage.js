export const insert_data_in_localstorage = (data) =>{
    const keys = Object.keys(data);
    keys.forEach(element => {
        console.log(element, data[element]);
        localStorage.setItem(element, data[element]);
    });
    
}