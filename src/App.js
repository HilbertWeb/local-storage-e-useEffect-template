import { useEffect, useState } from "react";

export default function App() {
  // Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState([]);

  // Estado para armazenar o valor do item sendo digitado
  const [item, setItem] = useState("");

  const removerLocalStorage = ()=>{
    localStorage.removeItem('lista')
    setListaCompras()

  }

  // Função para adicionar um item à lista de compras
  const adicionarItem = () => {
    if (item.trim() !== "") {
      // Verifica se o item não está vazio ou contém apenas espaços em branco
      setListaCompras([...listaCompras, item]); // Adiciona o item à lista de compras
      setItem(""); // Limpa o campo de entrada
    }
  };

  //Pratica 1

  const salveLocalStorage = () =>{

    const listaString = JSON.stringify(listaCompras)
    localStorage.setItem('lista', listaString)

  }
  //Pratica 2

  const getItemLocalStorage = () => {
    //Peguei do local storage
    const listaString = localStorage.getItem('lista',)
    //Transformei em Array
   // const listaArray = JSON.parse(listaString)

   // const getLista =  JSON.parse(localStorage.getItem('lista'))
    
    //if(listaArray){setListaCompras(listaArray)}
    listaCompras && setListaCompras(listaCompras)
    
  }
  useEffect(()=>{
    getItemLocalStorage()

  }, [])

  useEffect(()=>{ 

    if(listaCompras.length){

      salveLocalStorage()}

  }, [listaCompras])

 

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={salveLocalStorage}>Salvar no local</button>
      <button onClick={getItemLocalStorage}>Pegar do Local Storage</button>
      <button onClick={removerLocalStorage}>Remover do Local Storage</button>

      <ul>
        {listaCompras.map((compra, index) => (
          <li key={index}>{compra}</li>
        ))}
      </ul>
    </div>
  );
}
