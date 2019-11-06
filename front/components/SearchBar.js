import React from 'react';
import { Button } from 'antd';
import { Input } from 'antd';

const { Search } = Input;


const SearchBar = () => {
    return (
        <div style={{textAlign:'center', position: 'relative', top: -20}}>
            <Search placeholder="Got any place in mind?" onSearch={value => console.log(value)} enterButton style={{width:'748px', height:'52px'}}/>
        </div>
    );
};

export default SearchBar;