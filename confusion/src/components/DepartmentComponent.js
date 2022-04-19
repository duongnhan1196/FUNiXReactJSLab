import React from "react";


function RenderDepartment({department}) {
    return (
        <div>
            <p>{department.name}</p>
        </div>

    );
}


function Department(props) {
    const department = this.props.Department.map((department) => {
        return (
            <div key={department.id}>
                <RenderDepartment department={department} />
            </div>
        );

    });
}

export default Department;