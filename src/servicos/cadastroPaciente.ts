import API from "./api";
import { Paciente } from "../interfaces/paciente";


export async function cadastrarPaciente(paciente: Paciente){
    if(!paciente) return null;

    try{
        const resultado = await API.post('/paciente', paciente)
        console.log(resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}