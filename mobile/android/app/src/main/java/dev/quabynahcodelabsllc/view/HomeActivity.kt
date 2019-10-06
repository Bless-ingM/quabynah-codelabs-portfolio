package dev.quabynahcodelabsllc.view

import android.content.Intent
import android.os.Bundle
import android.view.Menu
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.core.os.bundleOf
import androidx.drawerlayout.widget.DrawerLayout
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.navigation.NavigationView
import com.google.android.material.snackbar.Snackbar
import dev.codelabs.template.debugger
import dev.quabynahcodelabsllc.R
import dev.quabynahcodelabsllc.databinding.ActivityHomeBinding
import dev.quabynahcodelabsllc.view.apps.AppDetailsFragment
import dev.quabynahcodelabsllc.view.blog.BlogDetailsFragment

class HomeActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityHomeBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHomeBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val toolbar: Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)

        val fab: FloatingActionButton = findViewById(R.id.fab)
        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                .setAction("Action", null).show()
        }
        val drawerLayout: DrawerLayout = findViewById(R.id.drawer_layout)
        val navView: NavigationView = findViewById(R.id.nav_view)
        val navController = findNavController(R.id.nav_host_fragment)
        // Passing each menu ID as a set of Ids because each
        // menu should be considered as top level destinations.
        appBarConfiguration = AppBarConfiguration(
            setOf(
                R.id.nav_home,
                R.id.nav_about,
                R.id.nav_services,
                R.id.nav_apps,
                R.id.nav_blog,
                R.id.nav_map,
                R.id.nav_contact
            ), drawerLayout
        )
        setupActionBarWithNavController(navController, appBarConfiguration)
        navView.setupWithNavController(navController)

        // Get intent
        val action = intent?.action
        if (action == Intent.ACTION_VIEW) {
            val data = intent?.data
            debugger("Path from intent: $data")
            when {
                data?.path!!.contains("apps") -> {
                    debugger("App ID: ${data.lastPathSegment}")
                    navController.navigate(
                        R.id.nav_app_details,
                        bundleOf(Pair(AppDetailsFragment.EXTRA_APP_ID, data.lastPathSegment))
                    )
                }

                data.path!!.contains("blog") -> {
                    debugger("Blog ID: ${data.lastPathSegment}")
                    navController.navigate(
                        R.id.nav_blog_details,
                        bundleOf(Pair(BlogDetailsFragment.EXTRA_BLOG_ID, data.lastPathSegment))
                    )
                }
            }
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.home, menu)
        return true
    }

    override fun onSupportNavigateUp(): Boolean {
        val navController = findNavController(R.id.nav_host_fragment)
        return navController.navigateUp(appBarConfiguration) || super.onSupportNavigateUp()
    }
}
