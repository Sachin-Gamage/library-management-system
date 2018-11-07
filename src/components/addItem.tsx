import * as React from 'react';
export class AddItem extends React.Component<{},{}>{

    public render(){
        return(
            <div className="row">
                <div className="col-25">
                    <label>First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>>
                </div>
            </div>
        );
    }
}