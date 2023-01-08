package ma.pharmacy.service;


import ma.pharmacy.dto.UserDto;
import ma.pharmacy.model.Pharmacie;
import ma.pharmacy.model.Role;
import ma.pharmacy.model.User;
import ma.pharmacy.repository.RoleRepository;
import ma.pharmacy.repository.UserRepository;
import ma.pharmacy.util.TbConstants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void saveUser(UserDto userDto) {
        Role role = roleRepository.findByName(TbConstants.Roles.USER);

        if (role == null)
            role = roleRepository.save(new Role(TbConstants.Roles.USER));

        User user = new User(userDto.getName(), userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()),
                Arrays.asList(role));
        user.setPharmacy(new Pharmacie("nom pharmacie","adresse de pharmacie",0.0,0.0,null));
        userRepository.save(user);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
}
