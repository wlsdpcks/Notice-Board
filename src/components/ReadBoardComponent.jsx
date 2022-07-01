import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            no: this.props.match.params.no,
            board: {},
        }
    }

    componentDidMount() {
        BoardService.findById(this.state.no).then( res => {
            this.setState({board: res.data});
        });
    }

    returnBoardType(typeNo) {
        let type = null;
        if (typeNo == 1) {
            type = "자유게시판";

        } else if (typeNo == 2 ) {
            type = "질문과 답변 게시판";

        } else {
            type = "타입 미지정";
        }

        return (
            <div className = "row">
                <label> Board Type : {type} </label> 
            </div>
        )

    }

    returnDate(cTime, uTime) {
        return (
            <div className = "row">
                <label>생성일 : [ {cTime} ] / 최종 수정일 : [ {uTime} ] </label>
            </div>
        )
    }

    goToList() {
        this.props.history.push('/board');
    }
    goToUpdate() {
        this.props.history.push(`/create-board/${this.state.no}`);
    }
        
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> 상세보기</h3>
                    <div className = "card-body">
                          
                            {this.returnBoardType(this.state.board.type)} 
                            <div className = "row">      
                         
                                <label> Title : {this.state.board.title} </label> 
                            </div>

                            <div className = "row">
                                <label> Contents : </label>  <br></br>
                                <textarea value={this.state.board.contents} readOnly/> 
                            </div >

                            <div className = "row">
                                <label> MemberNo :  {this.state.board.memberNo} </label>
                               
                            </div>

                            {this.returnDate(this.state.board.createdTime, this.state.board.updatedTime) }
                        
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                            <button className="btn btn-success" onClick={this.goToUpdate.bind(this)} style={{marginLeft:"10px"}}>수정</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadBoardComponent;