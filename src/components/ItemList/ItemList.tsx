import React, { useEffect, useState } from "react";
import { IObject, IObjects } from "../../types";
import Spinner from "../Spinner";
import './ItemList.css'

interface ItemListProps {
    onItemSelected: (id: number) => void;
    getData: () => Promise<IObjects>;
    children: (item: IObject) => string;
}

export const ItemList: React.FC<ItemListProps> = (props) => {
    const { onItemSelected, getData, children } = props
    const [ itemList, setItemList ] = useState<Partial<IObjects>>([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getData()
            .then((items) => {
                setItemList(items)
                setLoading(false)
            })
    }, [])

    const renderItems = (arr: IObjects) => {
        return arr.map((item: IObject) => {
            const { id } = item

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => {onItemSelected(id)}}
                    // eslint-disable-next-line no-console
                    onKeyDown={() => {console.log('key down')}}
                    role='menuitem' >
                    { children(item) }
                </li>
            )
        })
    }

    const spinner = loading? <Spinner /> : null
    const content = !loading? renderItems(itemList as IObjects) : null

    return (
        <ul className="item-list list-group">
            {spinner}
            {content}
        </ul>
    )
}   