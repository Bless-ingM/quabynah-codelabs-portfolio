package dev.quabynahcodelabsllc.view.apps

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import dev.quabynahcodelabsllc.databinding.FragmentAppDetailsBinding

/**
 * A simple [Fragment] subclass.
 */
class AppDetailsFragment : Fragment() {
    private lateinit var binding: FragmentAppDetailsBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentAppDetailsBinding.inflate(inflater)
        return binding.root
    }


    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        binding.text.text = requireActivity().intent?.data?.lastPathSegment ?: arguments?.get(
            EXTRA_APP_ID
        ).toString()
    }

    companion object {
        const val EXTRA_APP_ID = "app_id"
    }

}
