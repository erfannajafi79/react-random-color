import {Component} from "react";

class Color extends Component{

    state = {
        rgb : []
    };

    render () {
        return (
            <div style={{display : 'flex' , flexDirection : 'column' , alignItems : 'center'}}>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '20px' ,
                    cursor : 'pointer' , fontSize : '18px'}}  onClick={()=> {
                    this.setState( {rgb : [...this.state.rgb , [ Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) ]]})
                }}>
                    Add Color
                </button>

                {
                    this.state.rgb.map((item , index) => {
                        return (
                            <div style={{width : '350px' ,display : 'flex' , alignItems: 'center' , marginTop : '20px' }} key={index}>
                                <div style={{width: '80px' , height: '80px'  , borderRadius : '5px', backgroundColor: `rgb(${item[0]},${item[1]},${item[2]})` , marginRight: '20px' }}>

                                </div>
                                rgb ( {item.map((item , index)=> { return (
                                <div style={{marginLeft : '5px' , marginRight : '5px' , fontSize : '20px'}} key={index}>
                                    {item} {index % 3 !== 2 && ','}
                                </div>
                            )})} )
                            </div>)
                    })
                }
            </div>
        )
    }
}


export {Color}