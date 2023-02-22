import React, {Component} from 'react';
import './item-staus-filter.css';

export default class ItemStatusFilter extends Component {
    buttos = [
        {name: 'all', label: 'All list'},
        {name: 'active', label: 'Active list'},
        {name: 'done', label: 'Done list'}
    ];

    render () {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttos.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type = "button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name) }>
                    {label}
                </button>

            );
        });

        return (
            <div className={"btn-group"}>
                {buttons}
            </div>
        );
    }
}


