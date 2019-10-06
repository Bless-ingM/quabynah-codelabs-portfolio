package dev.quabynahcodelabsllc.view

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import dev.codelabs.template.browse
import dev.codelabs.template.moveTo
import dev.quabynahcodelabsllc.databinding.ActivityMainBinding
import java.util.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.startApp.setOnClickListener {
            moveTo(HomeActivity::class.java, true)
//            browse("https://quabynah-codelabs.web.app/apps/${UUID.randomUUID()}")
        }
    }
}
