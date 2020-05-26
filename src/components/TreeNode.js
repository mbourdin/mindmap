import React from "react";
class TreeNode extends React.Component{
    constructor(props){
        super(props);
        let leaves=this.props.leaves ? this.props.leaves : [];
        this.state={leaves:leaves};
        this.form={color:"Black",title:"Title"}
    }

    addBranch(branch)
    {       let leaves = this.state.leaves;
            leaves.push(branch);
            this.setState({leaves:leaves});
            console.log()
    }
    removeBranch=(index)=>{

        this.state.leaves.splice(index,1);
       this.forceUpdate();
    }
    removeBranchObject=(branch)=>
    {
        let index=this.state.leaves.findIndex(element=>element.props.title===branch.props.title);
        console.log(index);
        this.removeBranch(index);
    }
    delete=()=>
    {   console.log("delete");
        if(!this.props.isRoot) {
            this.props.root.removeBranchObject(this);
        }
        else
        {
            alert("impossible de supprimer la racine!");
        }
    }

    handleChange=(event)=>{
        this.form[event.target.name]=event.currentTarget.value;
        //console.log(this.form);
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.addBranch(<TreeNode
            root={this}
            title={this.form.title}
            color={this.form.color}
            offset={this.props.offset + 25}
        />);
    };
    render=()=>{
        return (
            <div className="text-left" style={{position : "relative",
            left : this.props.offset+"px",
            color : this.props.color

            }}>
            <h1 >{this.props.title}</h1>
            <form onSubmit={this.handleSubmit}>
                <label>titre</label>
                <input type="text" name="title" onChange={this.handleChange}/>
                <label>couleur</label>
                <input type="text" name="color" onChange={this.handleChange}/>
                <button>ajouter branche</button>
            </form>
            {!this.isRoot && <button className="btn btn-danger" onClick={this.delete}>DELETE</button>}
            <div>
                {   this.state.leaves.map((child,key)=>{
                   return(
                       <div key={key}>
                           {child}
                       </div>
                   )
                })
                }
            </div>
        </div>);
    }
}

export default TreeNode;