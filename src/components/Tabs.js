import './Tabs.css';

export default function Tabs(){

    return (
        <div className='tabs'>
           <div className='tab-active'>All</div>
           <div className='tab'>Active</div>
           <div className='tab'>Completed</div> 
        </div>
    );
}