package ma.pharmacy.service;

import ma.pharmacy.dto.UserDto;
import ma.pharmacy.model.User;

public interface UserService {
    void saveUser(UserDto userDto);

    User findUserByEmail(String email);
}
