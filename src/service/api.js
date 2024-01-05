import axios from "axios"

const API_URL="http://127.0.0.1:3000/details"

export const postDetails=async(data)=>{
    try{
        await axios.post(API_URL,data);
        alert("Successfully Added");
    }
    catch(error){
       console.log("Error occured",error.message)
    }
}
export const getDetails=async()=>{
    try{
        return await axios.get(API_URL)
    }
    catch(error){
        console.log("Error occured",error.message)
    }
}
export const getDetail=async(data)=>{
    try{
        return await axios.get(`${API_URL}/${data}`)
    }
    catch(error){
        console.log("Error occured",error.message)
    }
}
export const editDetail=async(data,id)=>{
    try{
        return await axios.put(`${API_URL}/${id}`,data)
    }
    catch(error){
        console.log("Error occured",error.message)
    }
}

export const deleteDetail = async (id) => {
    try {
        const userConfirmed = await customPrompt('Are you sure you want to delete this detail?');
        if (userConfirmed) {
            return await axios.delete(`${API_URL}/${id}`);
        } else {
            console.log('Deletion canceled by the user.');
            return null; 
        }
    } catch (error) {
        console.error('Error occurred:', error.message);
        throw error;
    }
}
const customPrompt = (message) => {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc;">
                <p>${message}</p>
                <button id="yesButton">Yes</button>
                <button id="noButton">No</button>
            </div>
        `;
        document.body.appendChild(modal);

        const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');

        yesButton.addEventListener('click', () => {
            resolve(true); // Resolve with true when Yes is clicked
            document.body.removeChild(modal);
        });

        noButton.addEventListener('click', () => {
            resolve(false); // Resolve with false when No is clicked
            document.body.removeChild(modal);
        });
    });
};
// export const deleteDetail=async(id)=>{
//     try{

//         return await axios.delete(`${API_URL}/${id}`)
//     }
//     catch(error){
//         console.log('Error occured',error.message)
//     }
// }