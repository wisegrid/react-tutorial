import {Component} from "react";
import NoticeBoardHeader from "./NoticeBoardHeader";
import './NoticeBoard.css';
import NoticeBoardItem from "./NoticeBoardItem";
class NoticeBoard extends Component {
    render() {
        const headerStyle = {
            margin: '10px 0px 0px 10px',
        };
        const tableStyle = {
            margin: '10px 0px 0px 10px',
            width: '600px',
            padding: '4px 4px 4px 4px',
            border: '1px solid black',
            borderCollapse: 'collapse'
        };
        return (
            <div>
                <h2 style={headerStyle}>Hello. React!</h2>,
                <table style={tableStyle}>
                    <NoticeBoardHeader/>
                    <NoticeBoardItem/>
                </table>
            </div>
        );
    }
}

export default NoticeBoard;
