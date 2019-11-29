import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['tag1','tag2','tag3']
    }
    
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    handleIncrement(){
        console.log('Increment clicked');
    }

    getBadgeClasses(){
        let classes = "badge m-2 ";
        classes += (this.state.count === 0)? "badge-warning":"badge-primary";
        return classes; 
    }

    formatCount(){
        const { count } = this.state;
        return count === 0? 'ZERO' : count;
    }
}
 
export default Counter;