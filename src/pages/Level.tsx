import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Level = () => {
    return (
        <div>
            <h2>Level Component</h2>

            <div style={{ display: 'flex', gap: "10px" }}>
                <NavLink to="/level/level-1" className="nav-link">Level 1</NavLink>
                <NavLink to="/level/level-2" className="nav-link">Level 2</NavLink>
            </div>
            {/* 在这里渲染子路由 */}
            <Outlet />
        </div>
    );
};

export default Level;
