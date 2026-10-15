export function insert(name: string, data: any) {
    data = JSON.stringify(data);
    return localStorage.setItem(name, data);
}

export function get(name: string){
    const data = localStorage.getItem(name);

    if(!data) throw new Error('Dado local não encontrado')

    return JSON.parse(data);
}

export function delet(name: string){
    return localStorage.removeItem(name);
}