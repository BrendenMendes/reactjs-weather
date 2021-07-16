import React from "react";
import {FC, useState} from "react";
import './App.css'
import { BsSearch } from 'react-icons/bs';

interface LocationSearchProps {
    onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
    const [locationSearch, setLocationSearch] = useState('');
    const disableSearch = locationSearch.trim() === '';

    const addLocation = () => {
        onSearch(locationSearch); // Prop callback invoked - string passed
        setLocationSearch('');
    };

    return (
        <div className="query">
            <label id="addlocation">
                <h6>Enter location</h6> 
                <input className="ml-1 mr-1" type="text" placeholder="e.g. Toronto" value={locationSearch} onChange={e => setLocationSearch(e.target.value)}/>
            </label>
            <button className="btn btn-light" onClick={addLocation} disabled={disableSearch}><BsSearch /></button>
        </div>
    );
}