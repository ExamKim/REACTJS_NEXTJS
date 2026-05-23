import React, { useRef, useState } from 'react'

export default function SearchBox() {
    const inputRef = useRef();
    const [find, setFind] = useState("");

    const handleSearch = () => {
        if (!find.trim()) {
            inputRef.current.focus();
            return;
        }

        setFind("");
        inputRef.current.focus();

    }
    return (
        <div>
            <input ref={inputRef} value={find}
                onChange={(e) => setFind(e.target.value)}
                placeholder="Nhập nội dung tìm kiếm..." />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}
