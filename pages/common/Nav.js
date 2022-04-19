import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
    <ul>
    <li className={styles.li}> <Link href='/'>메인</Link> </li>
    <li className={styles.li}> <Link href='/basic/counter'>카운터</Link> </li>
    <li className={styles.li}> <Link href='/basic/calc'>계산기</Link> </li>
    <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
    <li className={styles.li}> <Link href='/game/gameArticles'>게임추가</Link> </li>
    <li className={styles.li}> <Link href='/game/getGames'>게임목록</Link> </li>
    <li className={styles.li}> <Link href='/game/modifyGame'>게임수정</Link> </li>
    <li className={styles.li}> <Link href='/game/removeGame'>게임추가</Link> </li>
    <li className={styles.li}> <Link href='/game/teamArticles'>팀추가</Link> </li>
    <li className={styles.li}> <Link href='/game/getTeams'>팀목록</Link> </li>
    <li className={styles.li}> <Link href='/game/modifyTeam'>팀수정</Link> </li>
    <li className={styles.li}> <Link href='/game/removeTeam'>팀삭제</Link> </li>
    <li className={styles.li}> <Link href='/todo/addTodo'>투두추가</Link> </li>
    <li className={styles.li}> <Link href='/todo/getTodos'>투두목록</Link> </li>
    <li className={styles.li}> <Link href='/todo/modifyTodo'>투두수정</Link> </li>
    <li className={styles.li}> <Link href='/todo/removeTodo'>투두삭제</Link> </li>
    <li className={styles.li}> <Link href='/board/boardArticles'>게시글추가</Link> </li>
    <li className={styles.li}> <Link href='/board/getBoard'>게시글목록</Link> </li>
    <li className={styles.li}> <Link href='/board/modifyBoard'>게시글수정</Link> </li>
    <li className={styles.li}> <Link href='/board/removeBoard'>게시글삭제</Link> </li>
    <li className={styles.li}> <Link href='/board/board-list'>게시글목록</Link> </li>
    <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>
    <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
    <li className={styles.li}> <Link href='/user/getUsers'>사용자목록</Link> </li>
    <li className={styles.li}> <Link href='/user/updateUser'>사용자수정</Link> </li>
    <li className={styles.li}> <Link href='/user/withdrawUser'>혜민탈퇴</Link> </li>
  </ul>
    </nav>
  );
}