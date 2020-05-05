import React from 'react'
import styles from './Table.module.css'

const Table=(props)=> {   // creating a functional component for displaying the table
    return (
        <div>
            <table className={styles.table}>
                <tbody className={styles.border}>
                    <tr>
                        <td className={styles.td}>{props.name}</td>
                        <td className={styles.td}>{props.quantity}</td>
                        <td className={styles.td}><button className={styles.button} onClick={props.delete}>Delete</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Table