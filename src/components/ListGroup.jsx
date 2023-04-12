import { MouseEvent, useState } from "react";
// rafce for the shortcut
function ListGroup() {
    let items = [
        'Inbox',
        'sent',
        'drafts',
        'trash'
    ];

    // const selectedIndex = 0;
    const [selectedIndex, setSelectedIndex] = useState(-1);


    const hadleClick = (event) => console.log(event);

    // take every item and converted to another element
    // inside jsx brackets we can only use html elements or react components 
    // to use another elements we shouls wrap it with curly brackets
    return (  //in jsx there is no loops x
        <>
            {/* <h1>List Group</h1>
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
            </ul> */}

            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </>
    );
}

export default ListGroup;