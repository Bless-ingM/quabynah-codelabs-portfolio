package dev.quabynahcodelabsllc.view.blog

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import dev.quabynahcodelabsllc.databinding.FragmentBlogDetailsBinding

/**
 * A simple [Fragment] subclass.
 */
class BlogDetailsFragment : Fragment() {
    private lateinit var binding: FragmentBlogDetailsBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentBlogDetailsBinding.inflate(inflater)
        return binding.root
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        binding.text.text = arguments?.get(EXTRA_BLOG_ID).toString()
    }

    companion object {
        const val EXTRA_BLOG_ID = "blog_id"
    }

}
