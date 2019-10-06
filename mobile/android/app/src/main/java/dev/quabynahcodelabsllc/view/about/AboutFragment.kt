package dev.quabynahcodelabsllc.view.about

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import dev.codelabs.template.browse
import dev.quabynahcodelabsllc.BuildConfig
import dev.quabynahcodelabsllc.databinding.AboutFragmentBinding

class AboutFragment : Fragment() {
    private lateinit var binding: AboutFragmentBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = AboutFragmentBinding.inflate(inflater)
        return binding.root
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        binding.appVersion.text = String.format("Version %s", BuildConfig.VERSION_NAME)
        binding.visitWebsite.setOnClickListener { context?.browse("https://quabynah-codelabs.web.app/about") }
    }

}
