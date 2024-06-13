const Navigation = ({pageNum,handleDecrement,handleIncrement}) => {
    return ( 
        <div className='navigations'>
            <button className='prev-btn' onClick={handleDecrement}>
                <p>Previous</p>
            </button>
            <p className='page-num'>{pageNum}</p>
            <button className='next-btn' onClick={handleIncrement}>
                <p>Next</p>
            </button>
        </div>
     );
}

export default Navigation;