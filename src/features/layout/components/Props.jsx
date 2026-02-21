import React from 'react'

function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

function Avatar({ person, size }) {
    return (
        <img
            className="rounded-circle"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
    }

export function Props() {
    return (
        <main className='container-fluid text-center flex-grow-1'>
            <div>
                <h1>¿Que son los Props?</h1>
                <h3 className=''>Los props (abreviatura de properties) en React son datos que un componente padre le pasa a un componente hijo para personalizar su contenido o comportamiento. Funcionan como los parámetros de una función: permiten reutilizar componentes enviándoles información diferente cada vez que se usan. Los props son de solo lectura, lo que significa que el componente que los recibe no debe modificarlos. </h3>
            </div>
            <br />
            <br />
            <hr />
            <br />
    <div className='container text-center'>
        <div className="row">
            <div className="col rounded-circle">
                <Avatar 
                    size={150}
                    person={{ 
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2'
                }}
            />
        
            </div>
            <div className="col">
                <Avatar
                    size={150}
                    person={{
                    name: 'Aklilu Lemma', 
                    imageId: 'OKS67lh'
                }}
                />

            </div>

                <div className="col">
                <Avatar
                    size={150}
                    person={{ 
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
                />

                </div>
        </div>
        
    </div>
</main>
    );
}
