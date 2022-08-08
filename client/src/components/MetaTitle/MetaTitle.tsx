import React, {FC} from 'react';

interface props {
    title : string
}

const MetaTitle : FC<props> = ({title}) => {
    return <head><title>{title}</title></head>;
};

export default MetaTitle;