import {Component} from "react";
class NoticeBoardHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>선택</th>
                    <th>제목</th>
                    <th>조회수</th>
                    <th>날짜</th>
                </tr>
            </thead>
        );
    }
}

export default NoticeBoardHeader;