package dev.quabynahcodelabsllc.view.services

import androidx.lifecycle.ViewModelProviders
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

import dev.quabynahcodelabsllc.R

class ServicesFragment : Fragment() {

    companion object {
        fun newInstance() = ServicesFragment()
    }

    private lateinit var viewModel: ServicesViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.services_fragment, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(ServicesViewModel::class.java)
        // TODO: Use the ViewModel
    }

}
