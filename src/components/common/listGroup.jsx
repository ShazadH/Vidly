import React from "react";

const ListGroup = (props) => {
    const { items, valueProperty, textProperty, onItemsSelect } = props;
    console.log("items", items);

    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item[valueProperty]}
                    className="list-group-item"
                    onClick={() => onItemsSelect(item[textProperty])}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name",
};

export default ListGroup;
