import React from 'react';
import styles from './Button.module.scss';

const Button = ({ value, ...props }) => (
    <a className={styles.btn} {...props}>
        {value}
    </a>
);

export default Button;
