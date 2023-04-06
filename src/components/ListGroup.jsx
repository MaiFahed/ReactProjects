import { MouseEvent, useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'Nablus',
        'Ramallah',
        'Paris',
        'Tokyo'
    ];

    // const selectedIndex = 0;
    const [selectedIndex, setSelectedIndex] = useState(-1);


    const hadleClick = (event) => console.log(event);

    // take every item and converted to another element
    // inside jsx brackets we can only use html elements or react components 
    // to use another elements we shouls wrap it with curly brackets
    return (  //in jsx there is no loops x
        <>
            <h1>List Group</h1>
            <ul class="list-group" >
                {items.length === 0 ? <p>No items found</p> : null}
                {items.map((item, index) =>
                    <li
                        key={item}
                        className={selectedIndex === index ? 'list-group-item active' : "list-group-item"}
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {item}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;