import './Tabs.css';

export default function Tabs(props){

    let tabNames = [ "All", "Active", "Completed" ]

    let tabsUI = tabNames.map((tabName, key) => {
        if(tabName === props.selectedTab){
            return <div className='tab-active' key={key}>{tabName}</div>
        }
        return <div className='tab' key={key} onClick={()=>props.applyFilter(tabName)}>{tabName}</div>
    })

    return (
        <div className='tabs'>
           { tabsUI }
        </div>
    );
}