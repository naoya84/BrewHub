package jp.brewhub.server

import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain
import org.springframework.stereotype.Component

@Component
class SecurityConfig {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .csrf { it.disable() }
            .authorizeHttpRequests {
                it.requestMatchers("/api/**").authenticated()
            }
            .oauth2Login {
                it.defaultSuccessUrl("http://localhost:5173/", true)
            }
        return http.build()
    }
}