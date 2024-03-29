import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'


type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <div className={s.nameAffair}>{props.affair.name}</div>

            <button className={s.buttonClose} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
