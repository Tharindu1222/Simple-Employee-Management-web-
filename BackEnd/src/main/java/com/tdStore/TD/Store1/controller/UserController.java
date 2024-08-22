package com.tdStore.TD.Store1.controller;

import com.tdStore.TD.Store1.dto.UserDto;
import com.tdStore.TD.Store1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getusers")
    public List<UserDto> getUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/adduser")
    public UserDto addUser(@RequestBody UserDto userDto){
        return userService.addUser(userDto);
    }

    @PutMapping("/updateuser")
    public UserDto updateUser(@RequestBody UserDto userDto){
        return userService.updateUser(userDto);
    }

    @DeleteMapping("/deleteuser")
    public String deleteUser(@RequestBody UserDto userDto){
        return userService.deleteUser(userDto);
    }
}
