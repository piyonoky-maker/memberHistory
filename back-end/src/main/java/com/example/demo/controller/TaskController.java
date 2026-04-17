package com.example.demo.controller;

import com.example.demo.service.TaskService;
import com.example.demo.vo.TaskVO;
import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/*
MVC패턴 기준
컨트롤계층 - 사용자가 입력한 값 청취, 응답페이지에 대한 결과 처리(html, json)
서블릿과는 달리 서블릿을 상속받지 않고 처리한다. - 대신 어노테이션을 사용함.
복잡한 환경 설정, 의존성 관리
http://localhost:8000/dept/memberList
http://localhost:8000/dept/memberDetail
http://localhost:8000/dept/memberInsert
http://localhost:8000/dept/memberUpdate
http://localhost:8000/dept/memberDelete
*/

@Log4j2
@RestController
//@RequestMapping("/dept/*")
public class TaskController {
	@Autowired
	private TaskService taskService;// 변수 이름은 줄여쓰지 않음.

	// http://localhost:8000/task/taskList
	@GetMapping("task/taskList")
	public String taskList(TaskVO dvo) {
		log.info("taskList호출");
		//log.info("dname : " + dvo.getDname());
		List<Map<String, Object>> list = null;
		list = taskService.taskList(dvo);
		String temp = null;
		Gson gson = new Gson();
		temp = gson.toJson(list);
		return temp;// application/json
	}

	// http://localhost:8000/member/memberList?memSeq=1
	@GetMapping("task/taskDetail")
	public String taskDetail() {
		log.info("taskDetail호출");
		return "taskDetail";
	}

	@PostMapping("task/taskInsert")
	public String taskInsert(@RequestBody Map<String, Object> pmap) {
		log.info("taskInsert호출");
		log.info(pmap);
		int result = -1;
		result = taskService.taskInsert(pmap);
		return String.valueOf(result);// 이 반환값은 리액트 페이지로 반환됨
		// return "입력성공|실패";
	}

	@PutMapping("task/taskUpdate")
	public String taskUpdate(@RequestBody Map<String, Object> pmap) {
		log.info("taskUpdate호출");
		int result = 0;
		result = taskService.taskUpdate(pmap);
		return String.valueOf(result);// 1-> "1"
	}
	// http://localhost:8000/member/memberDelete?memSeq=123&memTel=123
	@DeleteMapping("task/taskDelete")
	public String taskDelete(TaskVO dvo) {
		log.info("taskDelete호출");
		log.info("task = "+ dvo);

		int result = -1;
		result = taskService.taskDelete(dvo);
		return String.valueOf(result);
	}
}