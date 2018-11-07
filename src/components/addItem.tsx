import * as React from 'react';
export class AddItem extends React.Component<{},{}>{

    public render(){
        return(
            <div>
                <div className="row">
                    <div className="col-5">
                        <label>ISBN</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Item ISBN" />
                    </div>
                </div>
            </div>
            
        );
    }
}