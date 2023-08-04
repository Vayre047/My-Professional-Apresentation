function Star({ rate }){
    
    var stars = Array(rate).fill('1');
    var rest = Array(5-rate).fill('1');
    return(
        <div>
            {stars.map((x, index) =>
            (
                <img key={index} className='star' src='../../../Images/starFull.png' alt="Programming Language" />
            ))}

            {rest.map((x, index) =>
            (
                <img key={index} className='star' src='../../../Images/star.png' alt="Programming Language" />
            ))
            }
        </div>
    )
}

export default Star;

