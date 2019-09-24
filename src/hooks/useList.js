import {useState} from 'react';


function useList(init){

    const [list, setList] = useState(init);

    return {
        list,
        removeItem(item) {
            const filteredItem = list.filter(value => value.name !== item);
            setList(filteredItem);
        },
        saveItem(index, newValue) {
            const copyList = [...list];
            copyList[index].name = newValue;
        }
    }
}

export default useList;