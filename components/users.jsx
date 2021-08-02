import React,{Component} from 'react'
import './stylesheet.css'
class Users extends Component {
    state = { 
        greetings: 'My User List',
        listofusers: [
            {
                name: 'Thandie',
                surname: 'Khumalo',
                location: 'Polokwane',
                age:12
            },
            {
                name: 'Tinti',
                surname:'Maloe',
                location:'Polokwane',
                age:14
            },
            {
                name:'Thabiso',
                surname:'Nxhumalo',
                location:'Johannesburg',
                age:17
            },
            {
                name:'Kagiso',
                surname:'Moneng',
                location:'Pretoria',
                age:19
            },
            {
                name: 'Maria',
                surname:'Fenyane',
                location:'Lebowakgomo',
                age:22
            },
            {
                name:'Mind',
                surname:'Malebana',
                location:'Polokwane',
                age:24
            }

        ]
     }
    render() { 
        return ( 
            <div className='user-container'>
                <div className='user-left'>
                <h1>{this.state.greetings}</h1>
                    {this.state.listofusers.map(el=><li>{el.name + ' ' + el.surname + ' | ' + el.location + ' | ' + el.age}</li>)}
                </div>
                <div className='user-right'>
                    <img src='boring-office-work-cartoon-vector-10571941.jpg'alt='boring' />
                </div>
            </div>
         );
    }
}
 

export default Users
