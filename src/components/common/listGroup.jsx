import React from "react";

const ListGroup = (props) => {
    const {
        items,
        valueProperty,
        textProperty,
        selectedItem,
        onItemsSelect,
    } = props;

    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={
                        item === selectedItem
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                    onClick={() => onItemsSelect(item)}
                >
                    {item[textProperty]}
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
