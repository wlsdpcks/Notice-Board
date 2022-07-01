import axios from 'axios';


class BoardService {

    getBoards() {
        return axios.get("http://localhost:8081/api/boardList");
    }
    createBoard(board) {
        return axios.post("http://localhost:8081/api/boardSave", board);
    }

    findById(no) {
        return axios.get("http://localhost:8081/api/boardFindById/" + no);
    }

    updateBoard(no, board) {
        return axios.put("http://localhost:8081/api/boardUpdate/" + no, board)
    }
}

export default new BoardService();